import {IExchangeSymbol} from "./interfaces";

export class ExchangeSymbol implements IExchangeSymbol {

    id: string;
    exchange: string;
    quoteAsset: string;
    baseAsset: string;

    constructor(exchange: string, baseAsset: string, quoteAsset: string, id?: string) {
        this.id = id || `${exchange.toUpperCase()}:${baseAsset}${quoteAsset}`
        this.exchange = exchange;
        this.quoteAsset = quoteAsset;
        this.baseAsset = baseAsset;
    }
}

export class NoInputFoundError extends Error {

    constructor(message: string) {
        super(message);
    }
}

export class SelectionError extends Error {
    public _configName: string;
    public _pageUrl: string;
    _needle: string;
    _haystack: string[];

    constructor(needle: string, haystack: string[]) {
        super(`Unable to partial match '${needle}' from the following options:\n${haystack.join("\n")}`)
        Object.setPrototypeOf(this, SelectionError.prototype);
        this._needle = needle;
        this._haystack = haystack;
    }


    set configName(value: string) {
        this._configName = value;
    }

    set pageUrl(value: string) {
        this._pageUrl = value;
    }
}
