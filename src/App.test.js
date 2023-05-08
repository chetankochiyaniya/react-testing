import { render, screen } from '@testing-library/react';
import App from './App';


// test('renders learn react link', () => {
//   render(<App />);
//    // const linkElement = screen.getByText(/learn react/i);
//   // update test from regEx to literal string
//   const linkElement = screen.getByText('Learn React');
//   expect(linkElement).toBeInTheDocument();
// });

// bank test will pass
test('renders learn react link', () => {
});

// throw error
test('renders learn react link', () => {
  throw new Error('test failed')
});

// new test case
test("baki sab chal raha he",()=>{
  console.log("test");
})