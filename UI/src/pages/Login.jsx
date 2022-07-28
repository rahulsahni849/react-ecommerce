import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color:#EEEEEE;

`

const Wrapper = styled.div`
    width:25%;
    padding: 20px;
    background-color: white;
    
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    margin:20px 10px 10px 0px;
    width: 40%;
    border: none;
    padding: 10px;
    background-color: #79C0F2;
`
const Link = styled.a`
    text-decoration: none;
    color: black;
    text-align: left;
    margin: 10px 0px;
    font-size: 12px;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Create</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>

        </Container>
    )
}

export default Login;

