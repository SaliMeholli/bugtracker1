
import {useState} from 'react';
import './CurrentIssue.css'

function CurrentIssue() {
  return (
    <div className="current-issues">
        <div className='indv-issue'>
            <p className="close-issue">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>High</span></p>
            <p>Description</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit quos officia nobis iusto sequi deleniti, accusantium mollitia doloribus vel saepe harum tempora perspiciatis? Quam quasi quo incidunt numquam ipsa.</p>
        </div>
        <hr />
        <div className='indv-issue'>
            <p className="close-issue">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>High</span></p>
            <p>Description</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit quos officia nobis iusto sequi deleniti, accusantium mollitia doloribus vel saepe harum tempora perspiciatis? Quam quasi quo incidunt numquam ipsa.</p>
        </div>
        <hr />
        <div className='indv-issue'>
            <p className="close-issue">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>High</span></p>
            <p>Description</p>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit quos officia nobis iusto sequi deleniti, accusantium mollitia doloribus vel saepe harum tempora perspiciatis? Quam quasi quo incidunt numquam ipsa.</p>
        </div>
    </div>
  );
}

export default CurrentIssue;
