import React from 'react'

import MasonryList from 'react-native-masonry-list'

import ArtPreview from './ArtPreview'
import { Container } from '../styles/components/Masonry'

const Masonry = ({ data, loading }) => {
  return (
    <Container>
      <MasonryList
        images={[
          {
            uri:
              'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            author: 'João Pedro M',
            id: 1
          },
          {
            URL:
              'https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            author: 'João Pedro M',
            id: 2
          },
          {
            uri:
              'https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            author: 'João Pedro M',
            id: 3
          },
          {
            uri:
              'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80',
            author: 'João Pedro M',
            id: 4
          },
          {
            url:
              'https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            author: 'João Pedro M',
            id: 5
          },
          {
            URL:
              'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            author: 'João Pedro M',
            id: 6
          },
          {
            URL:
              'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            author: 'João Pedro M',
            id: 7
          },
          {
            URL:
              'https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            author: 'João Pedro M',
            id: 8
          },
          {
            URL:
              'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
            author: 'João Pedro M',
            id: 9
          }
        ]}
        backgroundColor="transparent"
        imageContainerStyle={{ borderRadius: 15 }}
        spacing={2}
        onEndReached={() => {
          console.log('Chegou ao final, carregar mais')
        }}
        completeCustomComponent={props => <ArtPreview {...props} />}
      />
    </Container>
  )
}

export default Masonry
