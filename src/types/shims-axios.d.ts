import type {
    AxiosResponse,
    InternalAxiosRequestConfig,
    CreateAxiosDefaults,
    AxiosRequestConfig,
} from 'axios'

declare module 'axios' {
    /**
     * @description supportCancel 是否支持取消请求
     */
    export interface AxiosRequestConfig {
        supportCancel?: boolean;
    }
}

export interface RequestInterceptors<T> {
    // 请求拦截
    requestInterceptors?: (
        config: InternalAxiosRequestConfig,
    ) => InternalAxiosRequestConfig
    requestInterceptorsCatch?: (err: any) => any
    // 响应拦截
    responseInterceptors?: (config: T) => T
    responseInterceptorsCatch?: (err: any) => any
}

export interface CreateRequestConfig<T = AxiosResponse>
    extends CreateAxiosDefaults {
    interceptors?: RequestInterceptors<T>
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptors<T>
}

export interface CancelRequestSource {
    [index: string]: () => void
}