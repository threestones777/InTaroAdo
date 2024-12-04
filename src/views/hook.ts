import Epub from "epubjs";
import type { Book, Rendition } from 'epubjs'
import type { BookOptions } from 'epubjs/types/book'
import type { RenditionOptions } from 'epubjs/types/rendition'
 
export function useEpub() {
  let book: Book
  let rendition: Rendition
 
  function createBook(urlOrData?: string | ArrayBuffer, options?: BookOptions) {
    if(!urlOrData) {
      book = Epub(options)
    } else {
      book = Epub(urlOrData, options)
    }
    return book
  }
 
  function render(element: Element | string, options?: RenditionOptions) {
    if(!book) return
    if(typeof element === 'string') {
      rendition = book.renderTo(element, options)
    } else {
      rendition = book.renderTo(element, options)
    }
    return rendition
  }
 
  function display() {
    if(!rendition) return
    return rendition.display()
  }
 
  function getBook() {
    return book
  }
 
  function getRendition() {
    return rendition
  }
 
  return { createBook, render, display, getBook, getRendition }
}