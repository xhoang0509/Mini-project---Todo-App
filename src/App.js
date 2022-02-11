import React, { Suspense } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

const App = () => {
    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <ul>
                        <li><Link to="photos">Go to photo page</Link></li>
                        <li><Link to="photos/add">Go to Add new photo page</Link></li>
                        <li><Link to="photos/123">Go to Edit photo page</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/photos" />} />

                        <Route path="photos/*" element={<Photo />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
};

export default App;
