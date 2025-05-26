import LinkWithBorder from '../LinkWithBorder/LinkWithBorder';
import './Header.scss';
export default () => {
    return (
        <>
            <div className='Header container' id='social'>
                {/* <LinkWithBorder title={'Contact us'} /> */}
                <LinkWithBorder img={'/img/Logo.png'} addittional={`logo`} />
                <div className='Header_media'>
                    <LinkWithBorder img={'/img/tg.svg'} type={'tg'} />
                    <LinkWithBorder img={'/img/twitter.svg'} type={'twitter'} addittional='twitter' />
                    <LinkWithBorder img={'/img/dex.svg'} type={'dex'} addittional='dex' />
                </div>
            </div>
            <div className='Header Header_mob container'>
                <div className='Header_media'>
                    <LinkWithBorder img={'/img/tg.svg'} type={'tg'} />
                    <LinkWithBorder img={'/img/twitter.svg'} type={'twitter'} addittional='twitter' />
                    <LinkWithBorder img={'/img/dex.svg'} type={'dex'} addittional='dex' />
                </div>
            </div>
        </>
    )
}