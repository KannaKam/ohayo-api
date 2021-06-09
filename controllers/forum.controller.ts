import { Request, Response } from "express"
import { ForumThread } from '../models/forum.model';

class ForumController {

    createThread(req: Request, resp: Response) {
        ForumThread.create(req.body).then(async(Thread) => {
            if (!Thread) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            const newThread = await ForumThread.find({_id:Thread._id}).populate({path : 'userId'}).populate({path:'messages.userId'})
            return resp.status(200).send({
                status: 200,
                message: "Creating thread",
                thread: newThread
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    findAllThreads(req: Request, resp: Response) {
        ForumThread.find().populate({path : 'userId'}).populate({path:'messages.userId'}).then((Thread) => {
            if (!Thread) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing threads",
                threads: Thread
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    deleteThread(req: Request, resp: Response) {
        ForumThread.deleteOne({_id : req.body.thread._id}).then((Thread) => {
            if (!Thread) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Deleting thread"
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    commentThread(req: Request, res: Response) {
        const params = req.body;
        ForumThread.updateOne({ _id: params.threadId }, { $push: { messages: params.message } }).then((Thread) => {
            if (!Thread) {
                return res.status(500).send({
                    status: 500,
                    message: "Thread not found"
                })
            }
            return res.status(200).send({
                status: 200,
                message: "Commenting thread",
                thread: Thread
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    editThread(req: Request, res: Response) {
        const params = req.body.thread;
        console.log(params);
        ForumThread.updateOne({ _id: params._id }, params ).then((Thread) => {
            if (!Thread) {
                return res.status(500).send({
                    status: 500,
                    message: "Thread not found"
                })
            }
            return res.status(200).send({
                status: 200,
                message: "Commenting thread",
                thread: Thread
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }
    
}



export default ForumController