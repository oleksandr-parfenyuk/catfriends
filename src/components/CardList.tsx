    import React from 'react';
    import Card from './Card';

    export interface Props {
        robots: Robot[];
    }

    export interface Robot {
        id: number;
        name: string;
        username: string;
        email: string;
    }

    function CardList(props: Props) {
    const {robots} = props;
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
    }

    export default CardList;