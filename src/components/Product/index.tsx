import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem
      culpa explicabo debitis optio exercitationem libero. Aperiam nesciunt
      atque tempore cumque soluta aliquid praesentium cupiditate, ducimus
      laboriosam, iusto ex commodi?
    </Descricao>
  </Card>
)

export default Product
