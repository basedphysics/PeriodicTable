import { Dropdown } from "./DropDown"

export const ControlPanel = () => {
    return <div className="w-52">
        <Dropdown items={['plane', 'cones']} />
        <div>
        Atom:

18 argon Ar 
Atomic label
Emission:

plane
Color emissions
Show neutrons
Emission Radius
5.00
o-slots gap
2.50
epn gap
3.00
N offset
4.00
Cone angle
30.00
View:

perspective
Z Axis:



<input id="minmax-range" type="range" min="0" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" ></input>


        </div>
    </div>
}