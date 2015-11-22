require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'date'
require 'json'

class SRHRadio < Sinatra::Base

	# SAD group: creating the sqlite db file
	DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/srhpodcasts.db")


	#SAD Group : Modelling our class with 4 columns id,title of Podcast,metadata and length for the ORM model for the Podcast
	class Podcasts
		include DataMapper::Resource
		property :id, Serial
		property :title, Text
		property :metadata, Text 
		property :length, Float
		property :dateofbroadcast, DateTime
		property :resourceURI, Text
		property :podcastfile, Text
		property :categories, Text
	end

	
	class Future
		include DataMapper::Resource
		property :id, Serial
		property :futuretitle, Text
		property :futuredateofbroadcast, Date

		belongs_to :podcasts, :required => false
	end


	DataMapper.finalize.auto_upgrade!

	


	if Podcasts.count == 0
	Podcasts.create(:title => "first test podcast", :metadata => "test metadata for first audio", :length => 13.25, :dateofbroadcast=>Time.now, :resourceURI=> "http://10.0.2.2:80/Media/", :podcastfile => "sumith.mp3", :categories => "sports")

	Podcasts.create(:title => "second test podcast", :metadata => "test metadata for second audio", :length => 14.25, :dateofbroadcast=>Time.now, :resourceURI=> "http://10.0.2.2:80/Media/", :podcastfile => "anil1.mp3", :categories => "events")
	Podcasts.create(:title => "third test podcast", :metadata => "test metadata for third audio", :length => 15.25, :dateofbroadcast=>Time.now, :resourceURI=> "http://10.0.2.2:80/Media/", :podcastfile => "rakesh.mp3", :categories => "educational")
	Podcasts.create(:title => "fourth test podcast", :metadata => "test metadata for fourth audio", :length => 16.25, :dateofbroadcast=>Time.now, :resourceURI=> "http://10.0.2.2:80/Media/", :podcastfile => "nanditha.mp3", :categories => "general")
	end

	if Future.count == 0
		Future.create(:futuretitle=> "furture podcast 1", :futuredateofbroadcast=>'2015-06-06')
		Future.create(:futuretitle=> "furture podcast 1", :futuredateofbroadcast=>'2015-07-07')
		Future.create(:futuretitle=> "furture podcast 1", :futuredateofbroadcast=>'2015-08-08')

	end

	# SAD group: this where we render the home page to the client
	get '/' do
  		html :playlists
  	end

	# SAD group: this we redirect him to the podcast resource and will show him the last 10 recent podcast
	get '/podcasts' do
		@recent_podcasts = Podcasts.all order: :dateofbroadcast.desc
  		@recent_podcasts.to_json(:only => [:title,:id])
		#erb :podcasts
	end

	get '/podcasts/futurepodcasts' do
		@recent_podcasts = Future.all order: :futuredateofbroadcast.desc
  		@recent_podcasts.to_json(:only => [:futuretitle,:id,:futuredateofbroadcast])
		#erb :podcasts
	end

	get '/podcasts/:id' do
		@recent_podcasts = Podcasts.get(params[:id])
  		@recent_podcasts.to_json
		#erb :podcasts
	end


	get '/testing' do
		"hello world"

	end
	

	get '/podcasts/categories/:categories' do
		
		@recent_podcasts = Podcasts.all(:categories.like => "%"+params[:categories]+"%")


		@recent_podcasts.to_json
		
		#erb :podcasts

		#@contact.to_json
		#@podcast_filename = params[:podcastfilei
	end


	

end

