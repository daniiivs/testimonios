import Testimonio from './components/Testimonio.jsx'

function App() {
    const people = [
        {
            id: 0,
            imageUrl: '/PabloLopez.jpg',
            name: 'Pablo López',
            country: 'España',
            occupation: 'Ingeniero en Holded',
            description: '¡Hola! Quiero compartir mi emoción por React. Desde que lo descubrí, me ha fascinado cómo permite construir interfaces de usuario dinámicas y eficientes. Su enfoque basado en componentes hace que el código sea limpio y fácil de manejar, ideal para trabajar en equipo. La comunidad es increíble; siempre hay recursos y tutoriales disponibles. Además, herramientas como Create React App facilitan el proceso de desarrollo. Lo mejor es que puedo integrar tecnologías como Redux y Next.js, abriendo un mundo de posibilidades. ¡Cada proyecto es una nueva aventura y no puedo esperar a ver a dónde me lleva esta experiencia!'
        },
        {
            id: 1,
            imageUrl: '/MartaSuarez.jpg',
            name: 'Marta Suárez',
            country: 'Japón',
            occupation: 'Ingeniera en Unifocus',
            description: 'Trabajar con React ha sido una experiencia bastante reveladora. Me encanta lo intuitivo que es crear componentes interactivos y cómo el flujo de datos unidireccional ayuda a evitar confusiones cuando la aplicación crece. Además, su integración con herramientas como Redux o React Router lo convierte en una opción potente para aplicaciones más complejas. El uso de hooks ha simplificado mucho la gestión del estado, haciéndolo más accesible y limpio que antes. Aunque puede ser un poco abrumador al principio por la cantidad de conceptos nuevos, una vez que lo dominas, resulta una herramienta muy versátil'
        },
        {
            id: 2,
            imageUrl: '/NestorMartin.jpg',
            name: 'Néstor Martín',
            country: 'Tailandia',
            occupation: 'Ingeniero en Skello',
            description: 'Después de usar React durante varios proyectos, puedo decir que ha sido un cambio total en la forma en que desarrollo interfaces. Me encanta cómo organiza los componentes, lo que hace que el código sea mucho más limpio y fácil de mantener. Además, el uso del Virtual DOM realmente mejora el rendimiento, sobre todo en aplicaciones grandes. Con React, trabajar con JavaScript se siente más fluido gracias a JSX, que combina la lógica y la vista en un solo lugar. Aunque tiene una curva de aprendizaje, una vez que entiendes el flujo de datos con props y state, todo cobra sentido.'
        },
        {
            id: 3,
            imageUrl: '/LuciaRodriguez.jpg',
            name: 'Lucía Rodríguez',
            country: 'Dubai',
            occupation: 'Ingeniera en Remote',
            description: 'Desde que empecé a trabajar con React, he notado una gran mejora en mi productividad. La forma en que divide la interfaz en componentes reutilizables hace que el desarrollo sea más modular y fácil de mantener. Además, la comunidad alrededor de React es enorme, lo que significa que siempre encuentro soluciones a los problemas o nuevas herramientas que optimizan mi flujo de trabajo. Aunque al principio me costó entender algunos conceptos como el manejo del estado o el ciclo de vida de los componentes, una vez que los dominas, el desarrollo de aplicaciones dinámicas se vuelve mucho más ágil y eficiente.'
        }
    ]

    return (
        <>
            {people.map((person) =>
                <Testimonio key={person.id}
                            imageUrl={person.imageUrl}
                            name={person.name}
                            country={person.country}
                            occupation={person.occupation}
                            description={person.description}
                />)}
        </>
    )
}

export default App
