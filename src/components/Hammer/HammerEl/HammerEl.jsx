import LinkWithBorder from '../../LinkWithBorder/LinkWithBorder';
import './HammerEl.scss';
export default ({ title, img }) => {
    return (
        <div className='HammerEl'>
            <img src={img} alt="" />
            {title}
            <div className='HammerEl_btn'>
                {
                    title === 'HAMMER' ? <LinkWithBorder title={'Add a bot'}/> : <LinkWithBorder title={'coming soon'} gray/>
                }
            </div>
        </div>
    )
}