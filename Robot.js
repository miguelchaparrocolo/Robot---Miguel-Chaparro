function CreateRobot(coordinates, direction) {
    const move = [ 'a', 'w', 'd'];
    const orientation = ['North', 'West', 'East', 'South'];
    let [x, y] = coordinates;

            function  validParams() {
                try {
                    const isValid = orientation.includes(direction);
                    if(!isValid){
                        throw new Error('Bad Orientation :(')
                    }

                    if (x>10 || x<0 || y>10 || y<0){
                        throw new Error('Bad Coordinates :(')
                    }
                    return 'Good Params'
                } catch(Error)
            }

        function getPosition(){
            try {
                if(x>10 || x<0 || y>10 || y<0){
                    throw new Error('Limitless')
                }
                return {coordinates: [x, y], direction}
            }   catch(error){
                return error.message
            }
        }

        function Advance (){
            switch (direction){
                case 'North': y+=1; break;
                case 'South': y-=1; break;
                case 'West': x-=1; break;
                case 'East': x+=1; break;
            }
        }

        function TurnRight (){
            switch (direction){
                case 'North': direction = 'East'; break;
                case 'East': direction = 'South'; break;
                case 'South': direction = 'West'; break;
                case 'West': direction = 'North'; break;
            }
        }

        function TurnLeft (){
            switch (direction){
                case 'North': direction = 'West'; break;
                case 'West': direction = 'South'; break;
                case 'South': direction = 'East'; break;
                case 'East': direction = 'North'; break;
            }
        }

        function instructions(instruct){
            for(let i=0; i < instruct.length; i++){
                switch (instruct[i]){
                    case 'w': Advance(); break;
                    case 'a': TurnLeft(); break;
                    case 'd': TurnRight(); break;
                }
            }
        }
    return {
        getPosition,
        Advance,
        TurnLeft,
        TurnRight,
        instructions,
    };
}

module.exports = { CreateRobot };

