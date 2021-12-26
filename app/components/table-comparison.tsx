import React from 'react'
import { styled, css } from '~/stitches'
import {
  AnchorButton,
  Heading,
  Caption,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  P,
  VisuallyHidden,
} from '~/components'

export interface Head {
  text: string
}

export interface Foot {
  text: string
  url?: string
}

export interface TableData {
  caption: string
  head: Head[]
  body: any[][]
  foot: Foot[]
}

interface TableComparisonBuilderProps {
  data: TableData
}

const PriceText = styled('span', {
  fontSize: '$8',
})

export const TableComparisonBuilder: React.FunctionComponent<TableComparisonBuilderProps> =
  ({ data }) => {
    const { caption, head, body, foot } = data

    return (
      <Table>
        <Caption>
          <VisuallyHidden.Root>{caption}</VisuallyHidden.Root>
        </Caption>

        <Thead>
          <Tr>
            {head.map((item, index) => (
              <Th key={`head-${index}`} scope="col">
                <Heading as="h4">{item.text}</Heading>
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>
              <Heading as="h5">Pricing</Heading>
            </Td>
            <Td>
              <Heading as="h5">
                <PriceText>$0</PriceText> forever
              </Heading>
              <P>For personal hobby projects and experiments.</P>
              <AnchorButton href="https://app.kontenbase.com">
                Get started
              </AnchorButton>
            </Td>
            <Td>
              <Heading as="h5">
                <PriceText>
                  $1 <del>$5</del>{' '}
                </PriceText>
                <span>/month</span>
              </Heading>
              <P>For professional personal projects.</P>
              <AnchorButton href="https://app.kontenbase.com">
                Get started
              </AnchorButton>
            </Td>
          </Tr>

          {body.map((row, index) => (
            <React.Fragment key={`row-${index}`}>
              <Tr>
                {row[1]
                  ? row.map((text, i) => <Td key={`text-${i}`}>{text}</Td>)
                  : row.map((group, i) => (
                      <Td key={`group-${i}`} variant="group">
                        <Heading as="h6">{group}</Heading>
                      </Td>
                    ))}
              </Tr>
            </React.Fragment>
          ))}
        </Tbody>

        <Tfoot>
          <Tr>
            {foot.map((item, index) => (
              <Td key={`foot-${index}`} scope="row">
                {item.url && (
                  <AnchorButton href={item.url}>{item.text}</AnchorButton>
                )}
                {!item.text && <span>{item.text}</span>}
              </Td>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    )
  }
