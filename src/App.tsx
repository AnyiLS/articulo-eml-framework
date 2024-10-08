import React from 'react'
import Register from './app/pages/auth/register';

const App: React.FC = (): JSX.Element => {
    return (
        <React.Suspense fallback={<p>Cargando...!</p>}>
            <Register />
        </React.Suspense>
    )
}

export default App;