import React, {Component, PropTypes} from "react";
import {Text} from "react-native";
import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons';
import { default as VectorIconIM } from 'react-native-vector-icons/Icomoon'
import { getColor } from './helpers';
import VectorIconComponent from './VectorIconComponent';

// inject custom icon set here
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: Text.propTypes.style,
        size: PropTypes.number,
        color: PropTypes.string,
        allowFontScaling: PropTypes.bool
    };

    static defaultProps = {
        size: 30,
        color: '#757575',
        allowFontScaling: true
    };

    render() {
        const { name, style, size, color, allowFontScaling} = this.props;
        const VectorIcon = 'minicart-icon' === name
            ?  VectorIconIM
            :  VectorIconComponent.get();

        return  (
            <VectorIcon
                name={name}
                size={size}
                color={getColor(color)}
                style={style}
                allowFontScaling={allowFontScaling}
            />
        );
    }
}
