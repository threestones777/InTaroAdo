<template>
  <div class="container">
    <h3>5555</h3>
    <p>3333333333</p>

    <div id="vue-three"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  data() {
    return {}
  },
  methods: {
    initThree() {
      //场景
      let scene = new THREE.Scene()
      scene.background = new THREE.Color('yellow')
      // scene.fog = new THREE.Fog('red', 20, 100)

      // 相机
      var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100)
      camera.position.z = 5

      // 渲染器
      var renderer = new THREE.WebGLRenderer()
      renderer.setSize(500, 500)
      renderer.shadowMap.enabled = true
      let dom = document.getElementById('vue-three')
      dom.appendChild(renderer.domElement)

      const loader = new GLTFLoader()
      loader.load('/html/11111.glb', (gltf) => {
        let glbModel = gltf.scene
        console.log(gltf)
        glbModel.traverse((obj) => {
          // 将图片作为纹理加载
          let imgTexture = new THREE.TextureLoader().load('/favicon.ico')
          // 调整纹理图的方向
          imgTexture.flipY = false
          // 将纹理图生成材质
          const material = new THREE.MeshBasicMaterial({
            map: imgTexture
          })
          obj.material = material
          // 让模型等每个部分都能产生阴影
          if (obj.isMesh) {
            obj.castShadow = true
            obj.receiveShadow = true
          }
        })

        scene.add(glbModel)
      })

      function resizeDevicePixel(renderer) {
        const canvas = renderer.domElement
        let width = window.innerWidth
        let height = window.innerHeight
        let devicePixelWidth = canvas.width / window.devicePixelRatio
        let devicePixelHeight = canvas.height / window.devicePixelRatio

        const needResize = devicePixelWidth !== width || devicePixelHeight !== height
        if (needResize) {
          renderer.setSize(width, height, false)
        }
        return needResize
      }

      // 添加轨道控制器 让模型动起来
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.update()
      // 添加光与影子
      let floorGeometry = new THREE.PlaneGeometry(3000, 3000)
      let floorMaterial = new THREE.MeshPhongMaterial({ color: 'yellow' })
      let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
      floorMesh.rotation.x = -0.5 * Math.PI
      floorMesh.receiveShadow = true
      floorMesh.position.y = -0.001
      scene.add(floorMesh)
      //
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
      //光源等位置
      dirLight.position.set(-10, 8, -5)
      //可以产生阴影
      dirLight.castShadow = true
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
      scene.add(dirLight)
      const hemLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
      hemLight.position.set(0, 48, 0)
      scene.add(hemLight)
      //
      // ++++++

      function annimate() {
        renderer.render(scene, camera)
        requestAnimationFrame(annimate)
        // 添加以下代码
        if (resizeDevicePixel(renderer)) {
          const canvas = renderer.domElement
          camera.aspect = canvas.clientWidth / canvas.clientHeight
          camera.updateProjectionMatrix()
        }
      }
      annimate()
    }
  },
  mounted() {
    this.initThree()
  }
}
</script>
<style scoped>
.container {
  width: 1000px;
  height: 660px;
  margin: 10px auto;
  border: 1px solid #42b983;
}

#vue-three {
  width: 960px;
  height: 530px;
  margin: 0 auto;
  border: 1px solid #42b983;
  position: relative;
}
</style>
