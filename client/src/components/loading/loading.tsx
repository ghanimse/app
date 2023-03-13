import style from './loading.module.scss'
export default function Loading() {
    return (
        <>
            <div className={style.loading}>
                <div className={style['lds-ripple']}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}