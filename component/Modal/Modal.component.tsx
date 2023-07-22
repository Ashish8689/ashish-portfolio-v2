import React, { useCallback, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import CustomImage from '../CustomImage/CustomImage.component'
import CancelIcon from '../../svg/cancel.svg'
import { ModalProps } from './Modal.interface'
import Link from 'next/link'
import GithubIcon from '../../svg/github.svg'
import OutsideLinkIcon from '../../svg/outside-link.svg'

const Modal = ({ data, onClose, show }: ModalProps): React.JSX.Element => {
    const { description, img, stack, name, githubUrl, url } = data
    const closeOnEscapeKeyDown = useCallback(
        (e: any) => {
            if ((e.charCode || e.keyCode) === 27) {
                onClose()
            }
        },
        [onClose]
    )

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)

        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [closeOnEscapeKeyDown])

    return (
        <CSSTransition
            unmountOnExit
            in={show}
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className="modal" onClick={onClose}>
                <div className="modal-content">
                    <div className="modal-image-container">
                        <CustomImage src={img} />

                        <div className="modal-cancel-icon">
                            <CancelIcon onClick={onClose} />
                        </div>
                    </div>

                    <div className="model-content-container">
                        <div className="modal-header-container">
                            <h1>{name}</h1>
                            <div className="project-links-container">
                                <Link href={githubUrl} target="_blank">
                                    <div className="project-icons">
                                        <GithubIcon className="icon" />
                                    </div>
                                </Link>

                                <Link href={url} target="_blank">
                                    <div className="project-icons">
                                        <OutsideLinkIcon className="icon" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <h2>Description</h2>
                        <p className="mt-2 text-sm font-normal text-para-light">
                            {description}
                        </p>

                        <h2>Tech Stack</h2>

                        <ul>
                            {stack.map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal
