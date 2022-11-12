/* eslint-disable prettier/prettier,quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {Buffer} from 'buffer';
import './MessageSpy';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RSA, {Hash} from 'react-native-fast-rsa';

const Section: React.FC<PropsWithChildren<{
    title: string;
}>> = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    // cipher generated as RSA/ECB/OAEPWithSHA-256AndMGF1Padding
    const testCipher_gh56 = 'QK5pP83ZaaHF+HOr8XAZ6kXyFvSCQWEKlGgEdEQbCvpEa4rq57poO38+gBYXOtrs' +
        'vTtxOKAbW96FgybrVRdrW95IkyqUN121FuiHBCkhSUNav188KYKqmZEj4Kf+V7h9pljtQrcxaVNp9nOSfGyO' +
        '70v18ATOuSlUEP0QiJVsynnuf7t+SQTNuSHqSjAnoQcu9/KsZFakfRSETg6Z1FuNeex3hkOhRl2K3fVhhZsQ' +
        'sEAW1KKrP2ONHEtoSlV09CWpaTlx9nEnmNovh/1FAuHZ7+Nu2UqQKKT+rpa8kaij2Ks7Fb87uhZRnA8gU+AP' +
        'cMnHBfca+GHMvMX7jJQuOujSiA==';
    const testKey_gh56 = '-----BEGIN RSA PRIVATE KEY-----\n' +
        'MIIEpAIBAAKCAQEAqINTkDRjJ3dtq28jbWJaUhIWN4OKaLj50D6V0bDkspXDgviLf2ZvEfmg6Dlr' +
        'plVl4156lDojylFvpuNDEC9YItcuVD43095mvmho/LOypLcwx1RKN6etY5RYX1YZC0si9qsDMgEl' +
        'ZUrTEwXeEYaYLS5VG+uOixxa94f1seEy9usLd8ISMzcb0sEvurZTx6hBwE61R9slJTlL7paWvJ6v' +
        'bnaUEDyo7uLNqsyl0158wfHRFJJ9itA689Yk3cEZL50IBMpShmu7flqxXbKQGSu8Vcw1zLIrSruv' +
        'UuUD+w2SZVY3Kj3W9bQm+OW6DY2llB7/mTApo2yNoS3mS8hOeZhVIQIDAQABAoIBAAdqii+vQore' +
        '3G5+TGiYusFgZuZoDVwZAfOKgZTyLEp4wVs+/YKsmyhHHHAD8Osn2H1Wb94cpe0WQuvtFgs9Diuw' +
        'XStbdqEGKW7pUO+IKA1MO6MWIFMNN9oJUg9WDnGbC62f7prRhpgL4Di22iRa0FEyuA+rwQD5zT4W' +
        'F3fN4ayQrrmQaiLAYw0QvYZQDl7JK4ocQbVjgB7cHmPjB8G/zFKZhHwgLrYwDEnL7mz5f2t2aMLr' +
        'URovc1Opnwgk14SqdUGpJ1XMPE6TIzxaTPdqncGBpwTTspr5iJqvriYW2GjAT72HIXy3t3BpBOJt' +
        '4P5A7D0p9jTHJQRY+1QFgcr9Ec0CgYEA5J2HsYV1HPKoolvYhvFYXkTLTqDn9rKnHJP4MxTTQcSs' +
        'tjCgzAuDN7TlrXo5csNC6t7AElO22wPWwiEL9dM/O5VEQ0V/3+veABp6dIRh+TTKR6miNQ9UNrUj' +
        'CdhrOW40FX23oEZIFMpstId8/yA81oXVenda//uxhHDe1nJac/UCgYEAvLLDRNxPLr4ICQcfPiw/' +
        'kplgUDSn0z0vIZLl9bQ3Q0pX9eoF5gqxORbViBmZzzfsz2oo9LN3aaV9bUaarINmWTH0slm+vLk2' +
        'b2eyCGPlulS9RhNgmrrCazdqssWu1yBMIxBdvRmxEP6GZdpROn014cuZDFi/zaQ+TXwiFzdLTP0C' +
        'gYAEVukoeXwLnJ+O1Wd6yEIBKBUj3PIKQMHjTPu9HHwWF4Gfw7SJqv5GpGxnqpZEk2hFxQyoTGaA' +
        'KcZ90NrFQ8lDfEXbcQpIWdXQ8q+4XnrtnA7q5VFq6GuUzkNoAG+om2rprYU6yZq8qkr98kRxI0+E' +
        'Uu4GcRWNHl30QaA5Odp1sQKBgQCK+e4vbUM0Xel1HLW6CMTZp/TznZRtVAa+Z37Os+hvuvWFvNKT' +
        'VxSnw1WJY7GQmNPk/38imns8aBI0xWdt32kmEFD0enysaozZCDprS4gK8BZm4iaoTxyZ8rq26DmZ' +
        'X8Qznv4rJBzxM0SxB1YECewBXP5fxY2eW3U3hFFnX+Yp0QKBgQDbY41wFkswdz9BnzRF25eMlBQn' +
        'AjbXnO93FWWtexPXzLmqXJOt4lgF2YTv6YlosS5zrAGhaDHCZTiPrajqILeheS4RmYyzm6UvI2w6' +
        'QJ9NbxR/6plxTdCuhuL8JTBIakjRNAWWQa2l71rDvOeMvkh8ES00We9PRLTyG3iMruasEA==\n' +
        '-----END RSA PRIVATE KEY-----';

    const [decrypted, setDecrypted] = useState('');
    const [decrypted_b64, setDecrypted_b64] = useState('');
    const [jsi] = useState(true);
    const [running, setRunning] = useState(false);

    function str2hex(str) {
        var arr = [];
        for (var i = 0; i < str.length; i++) {
            arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return "\\u" + arr.join("\\u");
    }

    RSA.useJSI = false;
    RSA.decryptOAEP(testCipher_gh56, '', Hash.SHA256, testKey_gh56)
        .then((res: string) => {
            // debugger;
            const dec_b64 = Buffer.from(res).toString('base64');
            console.debug(`res_length:${res.length}`);
            console.debug(`res_b64:${dec_b64}`);
            setDecrypted(res);
            setDecrypted_b64(dec_b64);
            setRunning(false);
        });

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="RSA Test">
                        {Boolean(decrypted) && (
                            <>
                                <>
                                    using JSI: {jsi} - decrypted input with length: {decrypted.length} (see debug logs)
                                </>
                                {Boolean(running) && (
                                    <>
                                        [currently running RSA.decryptOAEP ...]
                                    </>
                                )}
                            </>
                        )}
                    </Section>
                    <Section title="Decrypted">
                        {Boolean(decrypted) && (
                            <Text>{decrypted_b64}</Text>
                        )}
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
