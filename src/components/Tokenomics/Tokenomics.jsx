import './Tokenomics.scss';
export default () => {
    return (
        <div className='Tokenomics container'>
            <div className='Tokenomics_title'>TOKENOMICS</div>
            <div className='Tokenomics_content'>
                {Array(10)
                    .fill(0)
                    .map((_, index) => {
                        return <div className='Tokenomics_el free_img' key={`Tokenomics` + '_' + index}>
                            <img src={`/img/tokenomics${index + 1}.svg`} alt="" />
                        </div>
                    })}
            </div>
        </div>
    )
}