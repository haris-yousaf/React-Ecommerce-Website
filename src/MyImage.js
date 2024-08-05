import styled from 'styled-components'


const MyImage = ({imgs = [{ url: "" }] }) => {

  return(
    <Wrapper>
      <div className='main-screen'>
        <img src={imgs[0].url} alt={imgs[0].filename} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 2rem;

  .main-screen img
  {
      max-width: 100%;
      min-height: 100%;
    }
`

export default MyImage