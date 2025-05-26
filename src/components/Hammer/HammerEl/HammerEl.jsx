import LinkWithBorder from '../../LinkWithBorder/LinkWithBorder';
import './HammerEl.scss';
export default ({ title, img, onMouseEnter, onMouseLeave }) => {
    return (
        <div className='HammerEl' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={img} alt="" />
            {title}
            <div className='HammerEl_btn'>
                {
                    title === 'HAMMER' ? <LinkWithBorder title={'Add a bot'} /> : <LinkWithBorder title={'coming soon'} gray />
                }
            </div>
        </div>
    )
}