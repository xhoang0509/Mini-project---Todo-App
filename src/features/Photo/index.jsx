import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/MainPage';

const Photo = () => {
    return (
        <Routes>
            <Route path="" element={<MainPage />} />

            <Route path="add" element={<AddEditPage />} />
            <Route path=":id" element={<AddEditPage />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Photo;
