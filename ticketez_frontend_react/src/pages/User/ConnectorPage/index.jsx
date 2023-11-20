import classNames from 'classnames/bind';
import style from './ConnectorPage.module.scss';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import bookingApi from '~/api/user/booking/bookingApi';

const cx = classNames.bind(style);

function ConnectorPage() {
    const { bookingId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const callPaymentApi = async () => {
            const queryParams = new URLSearchParams(window.location.search);
            const vnp_Amount = queryParams.get('vnp_Amount');
            const vnp_BankCode = queryParams.get('vnp_BankCode');
            const vnp_BankTranNo = queryParams.get('vnp_BankTranNo');
            const vnp_CardType = queryParams.get('vnp_CardType');
            const vnp_OrderInfo = queryParams.get('vnp_OrderInfo');
            const vnp_PayDate = queryParams.get('vnp_PayDate');
            const vnp_ResponseCode = queryParams.get('vnp_ResponseCode');
            const vnp_TmnCode = queryParams.get('vnp_TmnCode');
            const vnp_TransactionNo = queryParams.get('vnp_TransactionNo');
            const vnp_TransactionStatus = queryParams.get('vnp_TransactionStatus');
            const vnp_TxnRef = queryParams.get('vnp_TxnRef');
            const vnp_SecureHash = queryParams.get('vnp_SecureHash');

            const params = {
                vnp_Amount,
                vnp_BankCode,
                vnp_BankTranNo,
                vnp_CardType,
                vnp_OrderInfo,
                vnp_PayDate,
                vnp_ResponseCode,
                vnp_TmnCode,
                vnp_TransactionNo,
                vnp_TransactionStatus,
                vnp_TxnRef,
                vnp_SecureHash,
                bookingId,
            };

            // Gọi tới API sử dụng axios
            const resp = await bookingApi.getPaymentInfo(params);
            const page = resp.data.pageInvoiceUrl;
            navigate(page, {
                state: { paymentInfo: resp.data },
            });
        };

        callPaymentApi();
    }, []);

    return <div className={cx('wrapper', 'tw-text-red-300')}>aaaaa</div>;
}

export default ConnectorPage;