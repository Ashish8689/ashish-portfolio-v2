import Contact from '@/component/Contact/Contact.component'
import Header from '@/component/Header/Header.component'
import Hire from '@/component/Hire/Hire.component'
import Service from '@/component/Service/Service.component'
import Testimonial from '@/component/Testimonial/Testimonial.component'

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Service />
            <Hire />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home
