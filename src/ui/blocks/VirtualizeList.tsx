import React, { FC } from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

type Props = {
  data: Array<any>
  rowHeight?: number
  children: FC<any>
}

export const VirtualizedList: FC<Props> = (props) => {
  const { data, children, rowHeight } = props

  return (
    <AutoSizer>
      {({ width, height }) => {
        console.log({ width, height })
        return (
          <FixedSizeList
            height={height}
            width={width}
            itemSize={rowHeight ?? 150}
            itemCount={data.length}
            itemData={{
              item: data,
            }}
            // pass props to list item via itemData
          >
            {children}
          </FixedSizeList>
        )
      }}
    </AutoSizer>
  )
}
