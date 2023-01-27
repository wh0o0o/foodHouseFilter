import mainBannerStyle from './MainBanner.module.css'
import bannerImage from '../../../public/img/banner/hero-image.hero-right.png';

function MainBanner() {

    return (
        <div className={mainBannerStyle.mainBanner}>
            <div className={mainBannerStyle.mainBanner__content}>
                <div className={mainBannerStyle.mainBanner__contentTop}>
                    <p className={mainBannerStyle.mainBanner__contentTopText}>Экспресс-доставка от Яндекс.Еды</p>
                    <h1 className={mainBannerStyle.mainBanner__contentTopTitle}>Быстро и вкусно<span>.</span></h1>
                    <p className={mainBannerStyle.mainBanner__contentButtonText}>Сеть быстрого питания #1 в Казани</p>
                    <div className={mainBannerStyle.mainBanner__buttonText}>
                        <a href="#">Сделать заказ</a>
                        <p >бесплатная доставка от 500 рублей</p>
                    </div>
                </div>
            </div>
            <img src={bannerImage} alt="img"/>
        </div>
    )

}

export default MainBanner