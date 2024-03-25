import {orderByOptions} from "~/types/index";

export interface PostRequestQuery {
    limit?: number,
    offset?: number,
    include?: string,
    order?: string,
    select?: string
}


export const defaultPostRequest: PostRequestQuery = {
    limit: 10,
    offset: 0,
    include: 'user',
    order: orderByOptions.orderDesc,
    select: "id,title,excerpt,publishedAt,image",
}

export interface PostDetailsRequestQuery {
    include?: string,
}

export const defaultPostDetailRequest: PostDetailsRequestQuery = {
    include: 'user',
}

export interface CustomErrorResponseInterface {
    url: string
    statusCode: number
    statusMessage: string
    message: string
    stack: string
}

export const defaultErrorResponse: CustomErrorResponseInterface = {
    url: "",
    statusCode: 200,
    statusMessage: "",
    message: "",
    stack: ""
}