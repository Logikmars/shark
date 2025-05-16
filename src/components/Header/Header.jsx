import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './Header.scss';
export default () => {
    return (
        <div className='Header container'>
            <LinkWithBorder title={'Contact us'} />
            <LinkWithBorder img={'/img/Logo.png'} />
            <div className='Header_media'>
                <LinkWithBorder img={'/img/tg.svg'} />
                <LinkWithBorder img={'/img/twitter.svg'} />
            </div>
        </div>
    )
}