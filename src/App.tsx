import React from 'react'

const App: React.FC = (): JSX.Element => {
    return (
        <React.Suspense fallback={<p>Cargando...!</p>}>
            <div>Hola Hola</div>
        </React.Suspense>
    )
}

export default App;