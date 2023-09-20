import {XMLParser} from 'fast-xml-parser'

const parser = new XMLParser({cdataPropName: false})

export function parseXML(xml: string | Buffer) {
  return parser.parse(xml)
}
