import BookForm from './components/bookForm/BookForm';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BookForm />
      </LocalizationProvider>
    </div>
  );
}

export default App;
