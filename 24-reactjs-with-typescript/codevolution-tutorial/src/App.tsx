import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContext';
import Counter from './components/Counter';
import Input from './components/Input';
import CounterClassComponent from './components/class/Counter';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
// import Lists from './components/generics/Lists';
import RandomNumber from './components/restrictingProps/RandomNumber';
import Toast from './components/template-literals-and-exclude/Toast';
import { CustomButton } from './components/wrapping-html-elements/Button';
import CustomInput from './components/wrapping-html-elements/Input';
import CustomText from './components/polymorphic/Text';

const handleClick = (
    id: number,
    event?: React.MouseEvent<HTMLButtonElement>
): void => {
    console.log('id: ', id);
    console.log('event: ', event?.currentTarget);
};

const handleChange = (event?: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('event: ', event?.target.value);
};

function App() {
    return (
        <div className='App'>
            <CustomText as='h1' size='lg'>
                Heading
            </CustomText>
            <CustomText as='p' size='md'>
                Paragraph
            </CustomText>
            <CustomText as='label' htmlFor='myName' size='sm' color='secondary'>
                Label
            </CustomText>

            {/* <CustomButton variant='primary' onClick={() => console.log('button')}> */}
            {/*   Primary Button */}
            {/* </CustomButton> */}

            {/* <CustomInput value={'Phuong'} /> */}
            {/* <Toast position='center' /> */}
            {/* <RandomNumber value={10} isPositive /> */}
            {/* <Button handleClick={handleClick.bind(null, 1)} /> */}
            {/* <Input value='asd' handleChange={handleChange} /> */}
            {/* <Container styles={{border: '1px solid black', padding: '1rem'}}  /> */}
            {/* <ThemeContextProvider> */}
            {/*   <Box /> */}
            {/* </ThemeContextProvider> */}
            {/* <Counter /> */}
            {/* <Counter /> */}
            {/* <CounterClassComponent message='The total count is: ' /> */}
            {/* <Private isLoggedIn={true} component={Profile} /> */}
            {/* <Lists */}
            {/*   items={['Batman', 'Superman', 'Wonder Woman']} */}
            {/*   onClick={val => console.log(val)} */}
            {/* /> */}
            {/* <Lists items={[1, 2, 3, 4, 5]} onClick={val => console.log(val)} /> */}
            {/* <Lists */}
            {/*   items={[ */}
            {/*     { id: 1, name: 'Phuong', age: 22 }, */}
            {/*     { id: 2, name: 'Khang', age: 19 }, */}
            {/*     { id: 3, name: 'Long', age: 23 }, */}
            {/*   ]} */}
            {/*   onClick={val => console.log(val)} */}
            {/* /> */}
        </div>
    );
}

export default App;
