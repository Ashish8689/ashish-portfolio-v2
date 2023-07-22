import { PortfolioProps } from '@/app/portfolio/Portfolio.interface'

export interface ModalProps {
    data: PortfolioProps['data']
    show: boolean
    onClose: () => void
}
