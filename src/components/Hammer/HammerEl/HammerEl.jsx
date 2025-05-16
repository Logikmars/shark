import './HammerEl.scss';
export default ({ title, img }) => {
    return (
        <div className='HammerEl'>
            <img src={img} alt="" />
            {title}
        </div>
    )
}