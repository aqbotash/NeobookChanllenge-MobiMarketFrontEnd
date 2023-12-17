import React from 'react';

const ResponsiveContainer = ({ children, direction = 'column', responsive = true }) => (
  <div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: ${direction};
      }

      @media (min-width: 768px) {
        .container {
          flex-direction: ${responsive ? 'row' : 'column'};
        }
      }

      .box {
        flex: 1;
        margin: 8px;
        padding: 24px;
        position: relative;
      }
    `}</style>

    <div className="container">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="box">
          {child}
        </div>
      ))}
    </div>
  </div>
);

export default ResponsiveContainer;