using ZBTP_POST_QUOT_SRV from './external/ZBTP_POST_QUOT_SRV.cds';

service ZBTP_POST_QUOT_SRVSampleService {
    @readonly
    entity headerSet as projection on ZBTP_POST_QUOT_SRV.headerSet
    {        key Salesdocument     }    
;
}