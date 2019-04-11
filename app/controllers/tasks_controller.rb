class TasksController < ApplicationController
  def index
    @tasks = Task.all.sort
  end
  def create
    task = Task.new(name: params[:name])

    if task.save
      flash[:success] = "Oath sworn."
      redirect_to "/tasks"
    end
  end
  def update
    task = Task.find(params[:id])

    if task.completed?
      task.update(completed: false)
    else
      task.update(completed: true)
    end

    render json: {status: 200}
  end
end
