<template>
    <div>
        <div class="box-info">
            <h1 class="text-center title heading-two">
                Eksekutif Mahasiswa Informatika
            </h1>
            <p class="text-center lead-three">
                Himpunan Mahasiswa Informatika Fakultas Ilmu Komputer
                Universitas Brawijaya (HMIF FILKOM UB) adalah organisasi yang
                mewadahi, menaungi dan beranggotakan seluruh mahasiswa
                Informatika FILKOM UB.
            </p>
        </div>
        <div class="box-info">
            <h1 class="text-center title heading-two">Tujuan</h1>
            <p class="text-center lead-three">
                HMIF bertujuan untuk mewujudkan kedaulatan mahasiswa
                Informatika, mengembangkan kemampuan keprofesian dan
                non-keprofesian dan membentuk mahasiswa yang beriman dan
                bertakwa kepada Tuhan YME, memiliki wawasan yang luas,
                kecendekiawanan, integritas, kepribadian, kepedulian sosial
            </p>
        </div>
        <div class="box-info">
            <h1 class="text-center title heading-two">Struktur</h1>
            <p class="text-center lead-three">
                Dibawah naungan HMIF FILKOM UB terdapat dua lembaga pengurus
                yaitu Eksekutif Mahasiswa Informatika & Badan Perwakilan
                Mahasiswa Informatika
            </p>
            <div class="img-container">
                <div class="img-box">
                    <img :src="EmifImage" alt="EMIFLogo" />
                </div>
                <div class="img-box">
                    <img :src="BPMIFImage" alt="BPMIFLogo" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmifImage from '../../assets/img/AboutEMIF/emif-about.svg'
import BPMIFImage from '../../assets/img/AboutBPMIF/bpmif-about.svg'

export default {
    data: function() {
        return {
            EmifImage: EmifImage,
            BPMIFImage: BPMIFImage
        };
    }
};
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 50px;
}
.box-info {
    padding: 0 250px;
    margin: 150px 0;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
}
.text-center {
    text-align: center;
}
.img-container {
    display: flex;
    // border: 2px solid black;
    justify-content: space-around;
    margin-top: 45px;
    flex-wrap: wrap;
}
.img-box {
    // border: 2px solid black;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    // background-image: url('../../assets/img/hmif-logo.svg');
}
</style>
