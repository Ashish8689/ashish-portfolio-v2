import { PortfolioProps } from '../Portfolio/portfolio.interface'

export interface ModalProps {
    data: PortfolioProps['data']
    show: boolean
    onClose: () => void
}
