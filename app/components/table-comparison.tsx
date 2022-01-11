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

const ProText = styled('span', {
  color: '$heading1',
})

const PriceText = styled('span', {
  fontSize: '$5',
  '@tablet': { fontSize: '$7' },
  '@desktop': { fontSize: '$9' },
  del: { color: '$gray8' },
})

export const TableComparisonBuilder: React.FunctionComponent<
  TableComparisonBuilderProps
> = ({ data }) => {
  // const appUrl = 'https://app.kontenbase.com'
  const { caption, body, head, foot } = data

  return (
    <Table>
      <Caption>
        <VisuallyHidden.Root>{caption}</VisuallyHidden.Root>
      </Caption>

      <Thead>
        <Tr>
          <Th scope="col"></Th>
          <Th scope="col">
            <Heading as="h4">Free</Heading>
          </Th>
          <Th scope="col">
            <Heading as="h4">Pro</Heading>
            <ProText>Alpha Pricing Special</ProText>
          </Th>
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
            <P size="adaptive">For personal hobby projects and experiments.</P>
            {/* <AnchorButton size="adaptive" href={appUrl}>
                Get started
              </AnchorButton> */}
          </Td>
          <Td>
            <Heading as="h5">
              <PriceText>
                <del>$5</del>
                <span> $1 </span>
              </PriceText>
              <span>/project/month</span>
            </Heading>
            <P size="adaptive">For professional personal projects.</P>
            {/* <AnchorButton size="adaptive" href={appUrl}>
                Get started
              </AnchorButton> */}
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

      {/* <Tfoot>
          <Tr>
            {foot.map((item, index) => (
              <Td key={`foot-${index}`} scope="row">
                {item.url && (
                  <AnchorButton size="adaptive" href={item.url}>
                    {item.text}
                  </AnchorButton>
                )}
                {!item.text && <span>{item.text}</span>}
              </Td>
            ))}
          </Tr>
        </Tfoot> */}
    </Table>
  )
}
