"use strict";
class NormalMovieApiProvider {
}
class NormalAudioApiProvider {
}
class PremiumMovieApiProvider {
}
class PremiumAudioApiProvider {
}
class NormalApiProviderFactory {
    createMovieApiProvider() {
        return new NormalMovieApiProvider();
    }
    createAudioApiProvider() {
        return new NormalAudioApiProvider();
    }
}
class PremiumApiProviderFactory {
    createMovieApiProvider() {
        return new PremiumMovieApiProvider();
    }
    createAudioApiProvider() {
        return new PremiumAudioApiProvider();
    }
}
