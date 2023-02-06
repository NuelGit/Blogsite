import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './articles-content'
import NotFoundPage from './NotFoundPage'

export const ArticlesPage = () => {

  const { articleId } = useParams()
  const article = articles.find(article =>article.name ===articleId )

  if(!article){
    <NotFoundPage />
  }

  return (
    <> 
    <h1>{article.title} </h1>
    {article.content.map( artCont =>(
      <p key={artCont}> {artCont}</p>
    ))}
    </>
  )
}

export default ArticlesPage
