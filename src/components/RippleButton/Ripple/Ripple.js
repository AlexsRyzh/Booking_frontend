import React, { useState, useLayoutEffect } from "react";
import { RippleContainer } from "./Ripple.styled";
import PropTypes from "prop-types";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
    useLayoutEffect(() => {
        let bounce = null;
        if (rippleCount > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce);
            }, duration * 2);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = props => {
    const { duration, color, opacity } = props;
    const [rippleArray, setRippleArray] = useState([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = event => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;
        const x = event.clientX - rippleContainer.x - size / 2;
        const y = event.clientY - rippleContainer.y - size / 2;
        const newRipple = {
            x,
            y,
            size
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer duration={duration} color={color} opacity={opacity} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
};

Ripple.propTypes = {
    duration: PropTypes.number,
    color: PropTypes.string
};

Ripple.defaultProps = {
    duration: 850,
    color: "#fff"
};

export default Ripple;