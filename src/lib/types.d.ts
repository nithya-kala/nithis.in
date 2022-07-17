import {
  CheckboxPropertyValue,
  DatePropertyValue,
  Page,
  Block,
  PersonUser,
  RichTextPropertyValue,
  TitlePropertyValue,
  URLPropertyValue,
} from '@notionhq/client/build/src/api-types'

export interface PostItem {
  Page: TitlePropertyValue
  Slug: RichTextPropertyValue
  Published: CheckboxPropertyValue
  Date: DatePropertyValue
  Author: { rich_text: {plain_text: string}[] }
  Image: URLPropertyValue
  Description: RichTextPropertyValue
}

export interface PostProps extends Omit<Page, 'properties'> {
  properties: PostItem
  cover?: { file?: { url: string }, external?: { url: string } }
}
