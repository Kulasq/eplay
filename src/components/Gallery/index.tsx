import Section from '../Section'

import { Item, Itens } from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Itens>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
    </Itens>
  </Section>
)

export default Gallery
