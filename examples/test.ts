/**
 * Created by Christophe on 20/03/2017.
 */
import {Sprite, File} from "core";
var f:File = new File("files/sprites/p4-body.png");
var sp:Sprite = new Sprite(f, 20, 20);
sp.displayInDOMElement(document.body);