import {XMLParser} from 'fast-xml-parser'

const parser = new XMLParser({cdataPropName: false})

export function parseXML(xml) {
  return parser.parse(xml)
}
