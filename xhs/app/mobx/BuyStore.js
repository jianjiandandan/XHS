/**
 * Created by coatu on 2017/10/16.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {action, observable, computed, runInAction} from 'mobx'
import {get} from '../common/CommonDevice'



export default class BuyStore {
    @observable List = [];
    @observable errorMsg = '';
    @observable page = 1;
    @observable isRefreshing = false;
    @observable isNoMore = true;

    constructor(categoryId) {
        this.categoryId = categoryId;
        this.fetchList();
    }

    @action
    fetchList = async() => {
        try {
            if (this.isRefreshing)
                this.page = 1;
            const url = 'http://food.boohee.com/fb/v1/feeds/category_feed';
            const params = {
                page:this.page,
                category:this.categoryId,
                per: 10
            };
            const responseData = await get({url, params, timeout:30}).then(res => res.json());
            const {page, total_pages, feeds} = responseData;


            runInAction(() => {
                this.isRefreshing = false;
                this.errorMsg = '';
                this.isNoMore = page>=total_pages;

                if(this.page == 1){
                    this.List.replace(feeds);
                }else {
                    this.List.splice(this.List.length,0,...feeds);
                }
                }
            )
        }catch (error){
            if(error.msg){
                this.errorMsg = error.msg;
            }else {
                this.errorMsg = error;
            }
        }
    }
}






// export { get }